class Board < ApplicationRecord
  has_many :lists, dependent: delete_all

  validates_presence_of :title, allow_blank: false
end
