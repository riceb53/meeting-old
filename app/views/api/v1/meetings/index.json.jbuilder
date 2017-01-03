json.array! @meetings.each do |meeting|
  json.id meeting.id
  json.address meeting.address
  json.name meeting.name
  json.start_time meeting.start_time
  json.end_time meeting.end_time
  json.notes meeting.notes

end
