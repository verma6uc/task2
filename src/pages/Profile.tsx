import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Calendar, CheckCircle2, Clock, TrendingUp, Award, Target } from 'lucide-react'

interface Activity {
  id: string
  action: string
  task: string
  time: string
  type: 'completed' | 'created' | 'updated'
}

const recentActivity: Activity[] = [
  { id: '1', action: 'Completed', task: 'API Integration', time: '2 hours ago', type: 'completed' },
  { id: '2', action: 'Created', task: 'Design System Update', time: '4 hours ago', type: 'created' },
  { id: '3', action: 'Updated', task: 'User Authentication', time: '1 day ago', type: 'updated' },
  { id: '4', action: 'Completed', task: 'Database Migration', time: '2 days ago', type: 'completed' },
  { id: '5', action: 'Created', task: 'Mobile Responsive Design', time: '3 days ago', type: 'created' },
  { id: '6', action: 'Completed', task: 'Performance Optimization', time: '4 days ago', type: 'completed' },
  { id: '7', action: 'Updated', task: 'Security Audit', time: '5 days ago', type: 'updated' },
]

const achievements = [
  { id: '1', name: 'Early Bird', description: 'Completed 10 tasks before 9 AM', icon: '🌅', earned: true },
  { id: '2', name: 'Task Master', description: 'Completed 100 tasks', icon: '🎯', earned: true },
  { id: '3', name: 'Team Player', description: 'Collaborated on 50 projects', icon: '🤝', earned: true },
  { id: '4', name: 'Speed Demon', description: 'Completed 5 tasks in one day', icon: '⚡', earned: true },
  { id: '5', name: 'Perfectionist', description: 'Maintained 100% completion rate for a month', icon: '✨', earned: false },
  { id: '6', name: 'Marathon Runner', description: 'Worked on a project for 30 consecutive days', icon: '🏃', earned: false },
]

const skills = [
  { name: 'Frontend Development', level: 90 },
  { name: 'Backend Development', level: 75 },
  { name: 'UI/UX Design', level: 85 },
  { name: 'Project Management', level: 70 },
  { name: 'Testing & QA', level: 65 },
]

const stats = [
  { label: 'Tasks Completed', value: 156, change: '+12%', icon: CheckCircle2 },
  { label: 'Active Projects', value: 8, change: '+2', icon: Target },
  { label: 'Avg. Completion Time', value: '2.4 days', change: '-8%', icon: Clock },
  { label: 'Contribution Score', value: 94, change: '+5%', icon: TrendingUp },
]

export default function Profile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-2">
          View your profile and activity
        </p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Avatar className="h-24 w-24">
                <AvatarFallback className="text-3xl bg-secondary font-semibold">
                  JD
                </AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">Change Photo</Button>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-muted-foreground">john.doe@example.com</p>
                <div className="flex gap-2 mt-2">
                  <Badge>Product Manager</Badge>
                  <Badge variant="outline">Premium</Badge>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Passionate product manager with 5+ years of experience building exceptional digital products.
                Love working with cross-functional teams to deliver value to users.
              </p>

              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Joined January 2024</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <Card key={idx}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="activity" className="space-y-4">
        <TabsList>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className={`h-2 w-2 rounded-full mt-2 ${
                      activity.type === 'completed' ? 'bg-green-500' :
                      activity.type === 'created' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`} />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.action}</span>
                        {' '}
                        <span className="text-muted-foreground">task</span>
                        {' '}
                        <span className="font-medium">{activity.task}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant={
                      activity.type === 'completed' ? 'default' :
                      activity.type === 'created' ? 'secondary' :
                      'outline'
                    }>
                      {activity.type}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 border rounded-lg ${
                      achievement.earned ? 'bg-accent/50' : 'opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold">{achievement.name}</h3>
                          {achievement.earned && (
                            <Award className="h-4 w-4 text-yellow-500" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                        {!achievement.earned && (
                          <Badge variant="outline" className="mt-2">Locked</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} />
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6" variant="outline">
                Add New Skill
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
