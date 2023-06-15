# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# transform from snake_case to camelCase from front to back for responses 
Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true