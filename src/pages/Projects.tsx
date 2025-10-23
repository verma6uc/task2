import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Users, CheckCircle2, Clock, Calendar, MoreHorizontal } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface Project {
  id: string
  name: string
  description: string
  status: 'active' | 'on-hold' | 'completed'
  progress: number
  totalTasks: number
  completedTasks: number
  dueDate: string
  team: { name: string; initials: string }[]
  color: string
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website with modern design and improved UX',
    status: 'active',
    progress: 65,
    totalTasks: 23,
    completedTasks: 15,
    dueDate: '2025-11-15',
    team: [
      { name: 'John Doe', initials: 'JD' },
      { name: 'Jane Smith', initials: 'JS' },
      { name: 'Bob Johnson', initials: 'BJ' },
    ],
    color: 'bg-blue-500',
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Native mobile application for iOS and Android platforms',
    status: 'active',
    progress: 40,
    totalTasks: 45,
    completedTasks: 18,
    dueDate: '2025-12-30',
    team: [
      { name: 'Alice Williams', initials: 'AW' },
      { name: 'Charlie Brown', initials: 'CB' },
    ],
    color: 'bg-green-500',
  },
  {
    id: '3',
    name: 'API Integration',
    description: 'Integrate third-party APIs for payment processing and analytics',
    status: 'active',
    progress: 80,
    totalTasks: 12,
    completedTasks: 10,
    dueDate: '2025-10-28',
    team: [
      { name: 'David Lee', initials: 'DL' },
      { name: 'Emma Davis', initials: 'ED' },
    ],
    color: 'bg-purple-500',
  },
  {
    id: '4',
    name: 'Marketing Campaign',
    description: 'Q4 marketing campaign for product launch',
    status: 'on-hold',
    progress: 25,
    totalTasks: 20,
    completedTasks: 5,
    dueDate: '2025-12-01',
    team: [
      { name: 'Frank Miller', initials: 'FM' },
      { name: 'Grace Wilson', initials: 'GW' },
      { name: 'Henry Taylor', initials: 'HT' },
    ],
    color: 'bg-yellow-500',
  },
  {
    id: '5',
    name: 'Database Migration',
    description: 'Migrate from SQL to NoSQL database system',
    status: 'completed',
    progress: 100,
    totalTasks: 15,
    completedTasks: 15,
    dueDate: '2025-10-15',
    team: [
      { name: 'Ian Anderson', initials: 'IA' },
      { name: 'Julia Martinez', initials: 'JM' },
    ],
    color: 'bg-green-500',
  },
  {
    id: '6',
    name: 'Security Audit',
    description: 'Comprehensive security audit and penetration testing',
    status: 'active',
    progress: 55,
    totalTasks: 18,
    completedTasks: 10,
    dueDate: '2025-11-10',
    team: [
      { name: 'Kevin White', initials: 'KW' },
      { name: 'Laura Harris', initials: 'LH' },
    ],
    color: 'bg-red-500',
  },
]

const statusConfig = {
  'active': { label: 'Active', variant: 'default' as const },
  'on-hold': { label: 'On Hold', variant: 'secondary' as const },
  'completed': { label: 'Completed', variant: 'outline' as const },
}

export default function Projects() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-2">
            Manage your projects and track progress
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Project</DialogTitle>
              <DialogDescription>
                Start a new project and add team members
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Input id="project-name" placeholder="Enter project name..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-description">Description</Label>
                <Textarea id="project-description" placeholder="Project description..." rows={3} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-due">Due Date</Label>
                <Input id="project-due" type="date" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockProjects.filter(p => p.status === 'active').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockProjects.filter(p => p.status === 'completed').length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockProjects.reduce((acc, p) => acc + p.totalTasks, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockProjects.map(project => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${project.color}`} />
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {project.completedTasks}/{project.totalTasks} tasks
                  </span>
                </div>
                <Badge variant={statusConfig[project.status].variant}>
                  {statusConfig[project.status].label}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Due {new Date(project.dueDate).toLocaleDateString()}</span>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div className="flex -space-x-2">
                  {project.team.map((member, idx) => (
                    <Avatar key={idx} className="h-8 w-8 border-2 border-background">
                      <AvatarFallback className="text-xs bg-secondary">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">
                  {project.team.length} members
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
