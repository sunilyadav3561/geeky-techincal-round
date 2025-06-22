
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  FolderKanban, 
  Calendar, 
  Search,
  Filter,
  Plus,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  User
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Index = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data
  const teamUtilization = [
    { name: 'Frontend', allocated: 85, available: 15 },
    { name: 'Backend', allocated: 92, available: 8 },
    { name: 'DevOps', allocated: 75, available: 25 },
    { name: 'QA', allocated: 68, available: 32 },
  ];

  const projectStatus = [
    { name: 'Active', value: 12, color: '#3b82f6' },
    { name: 'Planning', value: 5, color: '#f59e0b' },
    { name: 'Completed', value: 23, color: '#10b981' },
  ];

  const engineers = [
    { 
      id: 1, 
      name: "John Smith", 
      skills: ["React", "Node.js", "Python"], 
      currentStatus: "60% allocated",
      projects: ["E-commerce Platform", "API Gateway"],
      seniority: "Senior",
      employmentType: "Full-time"
    },
    { 
      id: 2, 
      name: "Sarah Johnson", 
      skills: ["Python", "Django", "PostgreSQL"], 
      currentStatus: "40% allocated",
      projects: ["Data Analytics"],
      seniority: "Mid-level",
      employmentType: "Part-time"
    },
    { 
      id: 3, 
      name: "Mike Chen", 
      skills: ["DevOps", "AWS", "Docker"], 
      currentStatus: "Available",
      projects: [],
      seniority: "Senior",
      employmentType: "Full-time"
    },
  ];

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Modern shopping platform with React frontend",
      status: "Active",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
      requiredSkills: ["React", "Node.js", "MongoDB"],
      teamSize: 4,
      assignedEngineers: ["John Smith", "Alice Brown"]
    },
    {
      id: 2,
      name: "API Gateway",
      description: "Microservices API gateway implementation",
      status: "Planning",
      startDate: "2024-03-01",
      endDate: "2024-05-15",
      requiredSkills: ["Node.js", "Docker", "Redis"],
      teamSize: 2,
      assignedEngineers: ["John Smith"]
    },
    {
      id: 3,
      name: "Data Analytics Dashboard",
      description: "Real-time analytics and reporting system",
      status: "Active",
      startDate: "2024-02-01",
      endDate: "2024-07-31",
      requiredSkills: ["Python", "React", "PostgreSQL"],
      teamSize: 3,
      assignedEngineers: ["Sarah Johnson", "Mike Chen"]
    },
  ];

  const Navigation = () => (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-gray-900">Engineering Resource Management</h1>
          <div className="flex space-x-6">
            <button
              onClick={() => setCurrentView("dashboard")}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentView === "dashboard" 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView("engineers")}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentView === "engineers" 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Engineers
            </button>
            <button
              onClick={() => setCurrentView("projects")}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentView === "projects" 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setCurrentView("assignments")}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                currentView === "assignments" 
                  ? "bg-blue-100 text-blue-700" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Assignments
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <User className="w-4 h-4 mr-2" />
            Manager View
          </Button>
        </div>
      </div>
    </nav>
  );

  const DashboardView = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Engineers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 starting this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Utilization</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+5% from last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Engineers</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6</div>
            <p className="text-xs text-muted-foreground">Ready for new projects</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Team Utilization Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Team Utilization by Department</CardTitle>
            <CardDescription>Current allocation vs availability</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={teamUtilization}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="allocated" fill="#3b82f6" name="Allocated %" />
                <Bar dataKey="available" fill="#e5e7eb" name="Available %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Project Status Distribution</CardTitle>
            <CardDescription>Overview of all projects by status</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={projectStatus}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {projectStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates and assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">John Smith assigned to API Gateway project</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">E-commerce Platform needs 1 more React developer</p>
                <p className="text-xs text-gray-500">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Data Analytics Dashboard completed milestone 2</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const EngineersView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Engineers Management</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Engineer
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search engineers by name or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineers.map((engineer) => (
          <Card key={engineer.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{engineer.name}</CardTitle>
                <Badge variant={engineer.currentStatus === "Available" ? "default" : "secondary"}>
                  {engineer.seniority}
                </Badge>
              </div>
              <CardDescription>{engineer.employmentType}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {engineer.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-1">Current Status:</p>
                <p className="text-sm text-gray-600">{engineer.currentStatus}</p>
              </div>

              {engineer.projects.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-1">Current Projects:</p>
                  {engineer.projects.map((project) => (
                    <Badge key={project} variant="secondary" className="text-xs mr-1">
                      {project}
                    </Badge>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const ProjectsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projects Management</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="planning">Planning</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <Badge 
                    variant={
                      project.status === "Active" ? "default" :
                      project.status === "Planning" ? "secondary" : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-1">Duration:</p>
                    <p className="text-sm text-gray-600">
                      {project.startDate} to {project.endDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Team Size:</p>
                    <p className="text-sm text-gray-600">{project.teamSize} engineers</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Required Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.requiredSkills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                {project.assignedEngineers.length > 0 && (
                  <div>
                    <p className="text-sm font-medium mb-2">Assigned Engineers:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.assignedEngineers.map((engineer) => (
                        <Badge key={engineer} variant="secondary">
                          {engineer}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex space-x-2 pt-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Assign Engineers
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );

  const AssignmentsView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Assignment Management</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Assignment
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Assignments</CardTitle>
            <CardDescription>Active engineer-project assignments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-gray-600">E-commerce Platform • API Gateway</p>
                </div>
                <div className="text-right">
                  <Badge>60% Allocated</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Data Analytics Dashboard</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary">40% Allocated</Badge>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Mike Chen</p>
                  <p className="text-sm text-gray-600">No current assignments</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">Available</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Capacity Planning</CardTitle>
            <CardDescription>Upcoming availability for new projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">This Week</span>
                  <span className="text-sm text-gray-600">6 engineers available</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Next Week</span>
                  <span className="text-sm text-gray-600">8 engineers available</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Next Month</span>
                  <span className="text-sm text-gray-600">12 engineers available</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {currentView === "dashboard" && <DashboardView />}
        {currentView === "engineers" && <EngineersView />}
        {currentView === "projects" && <ProjectsView />}
        {currentView === "assignments" && <AssignmentsView />}
      </main>
    </div>
  );
};

export default Index;
