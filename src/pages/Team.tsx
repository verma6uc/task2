import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, Mail, MoreHorizontal, CheckCircle2, Clock } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface TeamMember {
  id: string
  name: string
  email: string
  role: 'admin' | 'member' | 'viewer'
  status: 'active' | 'away' | 'offline'
  tasksCompleted: number
  tasksInProgress: number
  joinDate: string
  initials: string
}

const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    status: 'active',
    tasksCompleted: 45,
    tasksInProgress: 3,
    joinDate: '2024-01-15',
    initials: 'JD',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'member',
    status: 'active',
    tasksCompleted: 38,
    tasksInProgress: 5,
    joinDate: '2024-02-20',
    initials: 'JS',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    role: 'member',
    status: 'away',
    tasksCompleted: 52,
    tasksInProgress: 2,
    joinDate: '2024-01-10',
    initials: 'BJ',
  },
  {
    id: '4',
    name: 'Alice Williams',
    email: 'alice.w@example.com',
    role: 'member',
    status: 'active',
    tasksCompleted: 31,
    tasksInProgress: 4,
    joinDate: '2024-03-05',
    initials: 'AW',
  },
  {
    id: '5',
    name: 'Charlie Brown',
    email: 'charlie.b@example.com',
    role: 'viewer',
    status: 'offline',
    tasksCompleted: 15,
    tasksInProgress: 1,
    joinDate: '2024-04-12',
    initials: 'CB',
  },
  {
    id: '6',
    name: 'Diana Prince',
    email: 'diana.p@example.com',
    role: 'member',
    status: 'active',
    tasksCompleted: 42,
    tasksInProgress: 6,
    joinDate: '2024-02-01',
    initials: 'DP',
  },
]

const statusColors = {
  'active': 'bg-green-500',
  'away': 'bg-yellow-500',
  'offline': 'bg-slate-400',
}

const roleColors = {
  'admin': 'bg-purple-500/10 text-purple-500',
  'member': 'bg-blue-500/10 text-blue-500',
  'viewer': 'bg-slate-500/10 text-slate-500',
}

interface Activity {
  id: string
  member: string
  action: string
  time: string
}

const recentActivity: Activity[] = [
  { id: '1', member: 'Jane Smith', action: 'completed task "API Integration"', time: '5 minutes ago' },
  { id: '2', member: 'John Doe', action: 'created new project "Mobile App"', time: '1 hour ago' },
  { id: '3', member: 'Bob Johnson', action: 'commented on "Design Review"', time: '2 hours ago' },
  { id: '4', member: 'Diana Prince', action: 'updated task status to "In Progress"', time: '3 hours ago' },
  { id: '5', member: 'Alice Williams', action: 'assigned task to John Doe', time: '4 hours ago' },
]

export default function Team() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Team</h1>
          <p className="text-muted-foreground mt-2">
            Manage your team members and collaboration
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
              <DialogDescription>
                Send an invitation to join your team
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="invite-email">Email Address</Label>
                <Input id="invite-email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="invite-role">Role</Label>
                <Select defaultValue="member">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">
                <Mail className="mr-2 h-4 w-4" />
                Send Invitation
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockTeamMembers.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockTeamMembers.filter(m => m.status === 'active').length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockTeamMembers.reduce((acc, m) => acc + m.tasksCompleted, 0)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockTeamMembers.reduce((acc, m) => acc + m.tasksInProgress, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Team Members */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Team Members</h2>
          <div className="grid gap-4">
            {mockTeamMembers.map(member => (
              <Card key={member.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-secondary text-lg font-semibold">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background ${statusColors[member.status]}`} />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Change Role</DropdownMenuItem>
                            <DropdownMenuItem>Send Message</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div className="flex items-center gap-2">
                        <Badge className={roleColors[member.role]}>
                          {member.role}
                        </Badge>
                        <Badge variant="outline" className="capitalize">
                          {member.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{member.tasksCompleted} completed</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{member.tasksInProgress} in progress</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.member}</span>
                        {' '}
                        <span className="text-muted-foreground">{activity.action}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
