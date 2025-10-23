import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface CalendarTask {
  id: string
  title: string
  date: string
  priority: 'low' | 'medium' | 'high'
  status: 'todo' | 'in-progress' | 'done'
}

const mockCalendarTasks: CalendarTask[] = [
  { id: '1', title: 'Design new landing page', date: '2025-10-25', priority: 'high', status: 'in-progress' },
  { id: '2', title: 'Fix authentication bug', date: '2025-10-24', priority: 'high', status: 'todo' },
  { id: '3', title: 'Update documentation', date: '2025-10-28', priority: 'medium', status: 'in-progress' },
  { id: '4', title: 'Implement dark mode', date: '2025-10-30', priority: 'medium', status: 'todo' },
  { id: '5', title: 'Optimize database queries', date: '2025-10-26', priority: 'high', status: 'in-progress' },
  { id: '6', title: 'Create user onboarding', date: '2025-11-01', priority: 'medium', status: 'todo' },
  { id: '7', title: 'Write unit tests', date: '2025-10-27', priority: 'medium', status: 'in-progress' },
  { id: '8', title: 'Security audit', date: '2025-10-29', priority: 'high', status: 'todo' },
  { id: '9', title: 'Team meeting', date: '2025-10-23', priority: 'low', status: 'done' },
  { id: '10', title: 'Code review', date: '2025-10-25', priority: 'medium', status: 'todo' },
]

const priorityColors = {
  'low': 'bg-blue-500',
  'medium': 'bg-yellow-500',
  'high': 'bg-red-500',
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 23)) // Oct 23, 2025

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const getTasksForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return mockCalendarTasks.filter(task => task.date === dateStr)
  }

  const today = new Date()
  const isToday = (day: number) => {
    return day === today.getDate() &&
           currentDate.getMonth() === today.getMonth() &&
           currentDate.getFullYear() === today.getFullYear()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground mt-2">
            View and manage your tasks by date
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
              <DialogDescription>
                Schedule a new task or event
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="event-title">Title</Label>
                <Input id="event-title" placeholder="Event title..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-description">Description</Label>
                <Textarea id="event-description" placeholder="Event description..." rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="event-date">Date</Label>
                <Input id="event-date" type="date" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Calendar Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={previousMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => setCurrentDate(new Date())}>
                Today
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map(day => (
              <div key={day} className="text-center font-semibold text-sm text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`} className="min-h-[100px] border rounded-lg bg-muted/20" />
            ))}

            {/* Days of the month */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const tasks = getTasksForDate(day)
              const isTodayDate = isToday(day)

              return (
                <div
                  key={day}
                  className={`min-h-[100px] border rounded-lg p-2 hover:bg-accent/50 transition-colors ${
                    isTodayDate ? 'border-primary border-2 bg-accent/30' : ''
                  }`}
                >
                  <div className={`text-sm font-semibold mb-2 ${
                    isTodayDate ? 'text-primary' : ''
                  }`}>
                    {day}
                  </div>
                  <div className="space-y-1">
                    {tasks.slice(0, 3).map(task => (
                      <div
                        key={task.id}
                        className={`text-xs p-1 rounded ${priorityColors[task.priority]} text-white truncate`}
                        title={task.title}
                      >
                        {task.title}
                      </div>
                    ))}
                    {tasks.length > 3 && (
                      <div className="text-xs text-muted-foreground">
                        +{tasks.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Tasks */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
          <div className="space-y-3">
            {mockCalendarTasks
              .filter(task => new Date(task.date) >= today)
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
              .slice(0, 5)
              .map(task => (
                <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full ${priorityColors[task.priority]}`} />
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(task.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <Badge variant={task.status === 'done' ? 'default' : 'secondary'}>
                    {task.status}
                  </Badge>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
