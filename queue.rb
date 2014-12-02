# Create queue with ruby!
# require "test/unit"
class Queue
  attr_accessor :list
  def initialize
    @list = []
  end

  def enq(item)
    @list << item
  end

  def deq
    if @list.empty?
      return @list
    else
      @list = @list[1..-1]
    end
  end

  def peek
    @list.first
  end
end


# tests
my_queue = Queue.new()

#test initial condition
puts my_queue.list == []

#test ability to add item to queue
my_queue.enq(3)
puts my_queue.list == [3]

#test ability to peek at top item on queue
my_queue.peek == 3
puts my_queue.list == [3]

#test ability to remove item from queue
my_queue.deq
puts my_queue.list == []

#make sure it doesn't crash
my_queue.deq
puts my_queue.list == []
