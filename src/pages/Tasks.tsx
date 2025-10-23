import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Search, LayoutList, LayoutGrid, Filter, MoreHorizontal, Calendar as CalendarIcon, User } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface Task {
  id: string
  title: string
  description: string
  status: 'todo' | 'in-progress' | 'review' | 'done'
  priority: 'low' | 'medium' | 'high'
  dueDate: string
  assignee: string
  tags: string[]
}

const mockTasks: Task[] = [
  { id: '1', title: 'Design new landing page', description: 'Create mockups for the new landing page with modern design', status: 'in-progress', priority: 'high', dueDate: '2025-10-25', assignee: 'John Doe', tags: ['Design', 'UI/UX'] },
  { id: '2', title: 'Fix authentication bug', description: 'Users are unable to login with Google OAuth', status: 'todo', priority: 'high', dueDate: '2025-10-24', assignee: 'Jane Smith', tags: ['Bug', 'Backend'] },
  { id: '3', title: 'Update documentation', description: 'Add API documentation for new endpoints', status: 'review', priority: 'medium', dueDate: '2025-10-28', assignee: 'Bob Johnson', tags: ['Documentation'] },
  { id: '4', title: 'Implement dark mode', description: 'Add dark mode support across the application', status: 'todo', priority: 'medium', dueDate: '2025-10-30', assignee: 'John Doe', tags: ['Feature', 'UI/UX'] },
  { id: '5', title: 'Optimize database queries', description: 'Improve performance of slow queries', status: 'in-progress', priority: 'high', dueDate: '2025-10-26', assignee: 'Jane Smith', tags: ['Performance', 'Backend'] },
  { id: '6', title: 'Setup CI/CD pipeline', description: 'Configure automated testing and deployment', status: 'done', priority: 'high', dueDate: '2025-10-20', assignee: 'Bob Johnson', tags: ['DevOps'] },
  { id: '7', title: 'Create user onboarding flow', description: 'Design and implement onboarding for new users', status: 'todo', priority: 'medium', dueDate: '2025-11-01', assignee: 'John Doe', tags: ['Feature', 'UI/UX'] },
  { id: '8', title: 'Write unit tests', description: 'Add test coverage for authentication module', status: 'in-progress', priority: 'medium', dueDate: '2025-10-27', assignee: 'Jane Smith', tags: ['Testing'] },
  { id: '9', title: 'Mobile app wireframes', description: 'Create wireframes for mobile application', status: 'review', priority: 'low', dueDate: '2025-11-05', assignee: 'John Doe', tags: ['Design', 'Mobile'] },
  { id: '10', title: 'Security audit', description: 'Conduct security audit of the application', status: 'todo', priority: 'high', dueDate: '2025-10-29', assignee: 'Bob Johnson', tags: ['Security'] },
]

const statusConfig = {
  'todo': { label: 'To Do', color: 'bg-slate-500' },
  'in-progress': { label: 'In Progress', color: 'bg-blue-500' },
  'review': { label: 'Review', color: 'bg-yellow-500' },
  'done': { label: 'Done', color: 'bg-green-500' },
}

const priorityConfig = {
  'low': { label: 'Low', color: 'text-slate-500' },
  'medium': { label: 'Medium', color: 'text-yellow-500' },
  'high': { label: 'High', color: 'text-red-500' },
}

export default function Tasks() {
  const [view, setView] = useState<'list' | 'board'>('list')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<string>('all')

  const filteredTasks = mockTasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const TaskCard = ({ task }: { task: Task }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-base font-semibold">{task.title}</CardTitle>
            <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary" className={statusConfig[task.status].color + ' text-white'}>
            {statusConfig[task.status].label}
          </Badge>
          <Badge variant="outline" className={priorityConfig[task.priority].color}>
            {priorityConfig[task.priority].label}
          </Badge>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{new Date(task.dueDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{task.assignee}</span>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          {task.tags.map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground mt-2">
            Manage and track all your tasks
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create New Task</DialogTitle>
              <DialogDescription>
                Add a new task to your workspace. Fill in the details below.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Task title..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Task description..." rows={3} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select defaultValue="todo">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todo">To Do</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="review">Review</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select defaultValue="medium">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Task</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tasks..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[140px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="todo">To Do</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="review">Review</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Tabs value={view} onValueChange={(v) => setView(v as 'list' | 'board')}>
          <TabsList>
            <TabsTrigger value="list">
              <LayoutList className="h-4 w-4 mr-2" />
              List
            </TabsTrigger>
            <TabsTrigger value="board">
              <LayoutGrid className="h-4 w-4 mr-2" />
              Board
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Task Views */}
      {view === 'list' ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(['todo', 'in-progress', 'review', 'done'] as const).map(status => (
            <div key={status} className="space-y-4">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${statusConfig[status].color}`} />
                <h3 className="font-semibold">{statusConfig[status].label}</h3>
                <Badge variant="secondary" className="ml-auto">
                  {filteredTasks.filter(t => t.status === status).length}
                </Badge>
              </div>
              <div className="space-y-3">
                {filteredTasks
                  .filter(task => task.status === status)
                  .map(task => (
                    <TaskCard key={task.id} task={task} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
