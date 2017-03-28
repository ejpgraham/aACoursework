require 'active_support'
require 'active_support/core_ext'
require 'erb'
require_relative './session'
require 'active_support/inflector'

class ControllerBase
  attr_reader :req, :res, :params

  # Setup the controller
  def initialize(req, res)
    @req = req
    @res = res
  end

  # Helper method to alias @already_built_response
  def already_built_response?
    @already_built_response
  end

  # Set the response status code and header
  def redirect_to(url)
    raise 'double render' if already_built_response?
    @res.status = 302
    @res.location = url
    @already_built_response = true
    session.store_session(res)
  end

  # Populate the response with content.
  # Set the response's content type to the given type.
  # Raise an error if the developer tries to double render.
  def render_content(content, content_type)
    raise 'double render' if already_built_response?
    @res['content-type'] = content_type
    @res.write(content)
    @already_built_response = true
     # QUESTION: Why do we have to store the session data here? Every time we manipulate the session object it is modified "locally" it is not sent back to the client side. When something is rendered or we redirect, that is an indication that our controller is done and we can now send up the cookie
    session.store_session(res)
  end

  # use ERB and binding to evaluate templates
  # pass the rendered html to render_content
  def render(template_name)
    url = "views/#{self.class.name.underscore}/#{template_name}.html.erb"
    contents = File.read(url)
    template = ERB.new(contents).result(binding)
    render_content(template, 'text/html')
  end

  # method exposing a `Session` object
  def session
    @session ||= Session.new(req)
  end

  # use this with the router to call action_name (:index, :show, :create...)
  def invoke_action(name)
    self.send(name)
  end
end

def create
  login(@user)
  redirect_to link_url
end
