import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, TrendingDown, Activity, Target, Clock, CheckCircle2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ChartData {
  label: string
  value: number
  color: string
}

const weeklyData: ChartData[] = [
  { label: 'Mon', value: 12, color: 'bg-blue-500' },
  { label: 'Tue', value: 19, color: 'bg-blue-500' },
  { label: 'Wed', value: 15, color: 'bg-blue-500' },
  { label: 'Thu', value: 25, color: 'bg-blue-500' },
  { label: 'Fri', value: 22, color: 'bg-blue-500' },
  { label: 'Sat', value: 8, color: 'bg-blue-500' },
  { label: 'Sun', value: 5, color: 'bg-blue-500' },
]

const projectProgress = [
  { name: 'Website Redesign', progress: 75, tasks: 15, total: 20 },
  { name: 'Mobile App', progress: 45, tasks: 9, total: 20 },
  { name: 'API Integration', progress: 90, tasks: 18, total: 20 },
  { name: 'Marketing Campaign', progress: 30, tasks: 6, total: 20 },
]

const categoryDistribution = [
  { name: 'Development', percentage: 45, count: 27, color: 'bg-blue-500' },
  { name: 'Design', percentage: 25, count: 15, color: 'bg-purple-500' },
  { name: 'Marketing', percentage: 15, count: 9, color: 'bg-green-500' },
  { name: 'Planning', percentage: 15, count: 9, color: 'bg-yellow-500' },
]

const teamPerformance = [
  { name: 'John Doe', completed: 45, inProgress: 3, efficiency: 93 },
  { name: 'Jane Smith', completed: 38, inProgress: 5, efficiency: 88 },
  { name: 'Bob Johnson', completed: 52, inProgress: 2, efficiency: 96 },
  { name: 'Alice Williams', completed: 31, inProgress: 4, efficiency: 86 },
]

const maxValue = Math.max(...weeklyData.map(d => d.value))

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-2">
          Track your productivity and team performance
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">166</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500">+12%</span>
              <span className="ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 days</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingDown className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500">-8%</span>
              <span className="ml-1">faster than before</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Efficiency</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">91%</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500">+5%</span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On-Time Delivery</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500">+3%</span>
              <span className="ml-1">improvement</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-7">
            {/* Weekly Activity Chart */}
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-end justify-between h-64 gap-2">
                    {weeklyData.map((data, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full flex items-end justify-center h-full">
                          <div
                            className={`w-full ${data.color} rounded-t transition-all hover:opacity-80`}
                            style={{ height: `${(data.value / maxValue) * 100}%` }}
                            title={`${data.label}: ${data.value} tasks`}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">{data.label}</span>
                        <span className="text-xs font-medium">{data.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Task Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categoryDistribution.map((category, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${category.color}`} />
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <span className="text-muted-foreground">{category.count} tasks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={category.percentage} className="flex-1" />
                        <span className="text-sm font-medium w-12 text-right">{category.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {projectProgress.map((project, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{project.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {project.tasks}/{project.total} tasks completed
                        </p>
                      </div>
                      <Badge variant={project.progress >= 80 ? 'default' : 'secondary'}>
                        {project.progress}%
                      </Badge>
                    </div>
                    <Progress value={project.progress} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {teamPerformance.map((member, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {member.completed} completed · {member.inProgress} in progress
                        </p>
                      </div>
                      <Badge variant={member.efficiency >= 90 ? 'default' : 'secondary'}>
                        {member.efficiency}% efficiency
                      </Badge>
                    </div>
                    <Progress value={member.efficiency} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Additional Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Most Productive Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Thursday</div>
            <p className="text-xs text-muted-foreground mt-1">
              Average of 25 tasks completed
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10 AM - 2 PM</div>
            <p className="text-xs text-muted-foreground mt-1">
              Highest activity period
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground mt-1">
              Tasks completed on time
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
