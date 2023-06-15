class ApplicationController < ActionController::API

# add to transform keys in params before any controller actions, frontend to backend
# camelCase to snake_case 
before_action :snake_case_params

private

def snake_case_params
  params.deep_transform_keys!(&:underscore)
end

end
