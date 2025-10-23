import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Plus, Tag, MoreHorizontal, Search } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

interface TagData {
  id: string
  name: string
  color: string
  taskCount: number
  description: string
}

const mockTags: TagData[] = [
  { id: '1', name: 'Bug', color: 'bg-red-500', taskCount: 12, description: 'Bug fixes and issues' },
  { id: '2', name: 'Feature', color: 'bg-blue-500', taskCount: 28, description: 'New feature development' },
  { id: '3', name: 'Design', color: 'bg-purple-500', taskCount: 15, description: 'Design and UI/UX work' },
  { id: '4', name: 'Documentation', color: 'bg-green-500', taskCount: 8, description: 'Documentation and guides' },
  { id: '5', name: 'Backend', color: 'bg-yellow-500', taskCount: 22, description: 'Backend development' },
  { id: '6', name: 'Frontend', color: 'bg-cyan-500', taskCount: 18, description: 'Frontend development' },
  { id: '7', name: 'Testing', color: 'bg-orange-500', taskCount: 14, description: 'Testing and QA' },
  { id: '8', name: 'Performance', color: 'bg-pink-500', taskCount: 7, description: 'Performance optimization' },
  { id: '9', name: 'Security', color: 'bg-indigo-500', taskCount: 9, description: 'Security improvements' },
  { id: '10', name: 'DevOps', color: 'bg-teal-500', taskCount: 5, description: 'DevOps and infrastructure' },
  { id: '11', name: 'Mobile', color: 'bg-violet-500', taskCount: 11, description: 'Mobile development' },
  { id: '12', name: 'UI/UX', color: 'bg-fuchsia-500', taskCount: 16, description: 'User interface and experience' },
]

const colorOptions = [
  { value: 'bg-red-500', label: 'Red' },
  { value: 'bg-blue-500', label: 'Blue' },
  { value: 'bg-green-500', label: 'Green' },
  { value: 'bg-yellow-500', label: 'Yellow' },
  { value: 'bg-purple-500', label: 'Purple' },
  { value: 'bg-pink-500', label: 'Pink' },
  { value: 'bg-indigo-500', label: 'Indigo' },
  { value: 'bg-cyan-500', label: 'Cyan' },
  { value: 'bg-orange-500', label: 'Orange' },
  { value: 'bg-teal-500', label: 'Teal' },
]

export default function Tags() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTags = mockTags.filter(tag =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tag.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalTasks = mockTags.reduce((acc, tag) => acc + tag.taskCount, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tags</h1>
          <p className="text-muted-foreground mt-2">
            Organize tasks with custom tags
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Tag
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Tag</DialogTitle>
              <DialogDescription>
                Add a new tag to organize your tasks
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="tag-name">Tag Name</Label>
                <Input id="tag-name" placeholder="e.g., Priority, Review" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tag-description">Description</Label>
                <Input id="tag-description" placeholder="Brief description..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tag-color">Color</Label>
                <Select defaultValue="bg-blue-500">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map(color => (
                      <SelectItem key={color.value} value={color.value}>
                        <div className="flex items-center gap-2">
                          <div className={`h-4 w-4 rounded ${color.value}`} />
                          <span>{color.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create Tag</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tags</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockTags.length}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Across all projects
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tagged Tasks</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalTasks}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Tasks with tags
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Used</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockTags.reduce((prev, current) =>
                prev.taskCount > current.taskCount ? prev : current
              ).name}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Most popular tag
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tags..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tag Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTags.map(tag => (
          <Card key={tag.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-4 w-4 rounded-full ${tag.color}`} />
                  <CardTitle className="text-base">{tag.name}</CardTitle>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Change Color</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{tag.description}</p>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {tag.taskCount} tasks
                </Badge>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  View Tasks
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tag Usage Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Tag Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockTags
              .sort((a, b) => b.taskCount - a.taskCount)
              .slice(0, 8)
              .map(tag => (
                <div key={tag.id} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${tag.color}`} />
                      <span className="font-medium">{tag.name}</span>
                    </div>
                    <span className="text-muted-foreground">{tag.taskCount} tasks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${tag.color}`}
                        style={{ width: `${(tag.taskCount / totalTasks) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-12 text-right">
                      {Math.round((tag.taskCount / totalTasks) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
