require 'digest/md5'

module Jekyll
  module Filters
    def hash(input)
      (Digest::MD5.hexdigest input)[0..8]
    end
  end
end
