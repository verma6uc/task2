export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dev_teams: {
        Row: {
          id: string
          name: string
          description: string | null
          avatar_url: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          avatar_url?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          avatar_url?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      dev_team_members: {
        Row: {
          id: string
          team_id: string
          user_id: string | null
          role: 'owner' | 'admin' | 'member'
          joined_at: string
        }
        Insert: {
          id?: string
          team_id: string
          user_id?: string | null
          role: 'owner' | 'admin' | 'member'
          joined_at?: string
        }
        Update: {
          id?: string
          team_id?: string
          user_id?: string | null
          role?: 'owner' | 'admin' | 'member'
          joined_at?: string
        }
      }
      dev_projects: {
        Row: {
          id: string
          team_id: string
          name: string
          description: string | null
          status: 'active' | 'archived' | 'completed'
          color: string | null
          start_date: string | null
          end_date: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          team_id: string
          name: string
          description?: string | null
          status?: 'active' | 'archived' | 'completed'
          color?: string | null
          start_date?: string | null
          end_date?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          team_id?: string
          name?: string
          description?: string | null
          status?: 'active' | 'archived' | 'completed'
          color?: string | null
          start_date?: string | null
          end_date?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      dev_tasks: {
        Row: {
          id: string
          project_id: string
          title: string
          description: string | null
          status: 'todo' | 'in_progress' | 'in_review' | 'blocked' | 'done'
          priority: 'low' | 'medium' | 'high' | 'urgent'
          due_date: string | null
          estimated_hours: number | null
          actual_hours: number | null
          created_by: string | null
          created_at: string
          updated_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          project_id: string
          title: string
          description?: string | null
          status?: 'todo' | 'in_progress' | 'in_review' | 'blocked' | 'done'
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          due_date?: string | null
          estimated_hours?: number | null
          actual_hours?: number | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          project_id?: string
          title?: string
          description?: string | null
          status?: 'todo' | 'in_progress' | 'in_review' | 'blocked' | 'done'
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          due_date?: string | null
          estimated_hours?: number | null
          actual_hours?: number | null
          created_by?: string | null
          created_at?: string
          updated_at?: string
          completed_at?: string | null
        }
      }
      dev_task_assignments: {
        Row: {
          id: string
          task_id: string
          user_id: string | null
          assigned_at: string
          assigned_by: string | null
        }
        Insert: {
          id?: string
          task_id: string
          user_id?: string | null
          assigned_at?: string
          assigned_by?: string | null
        }
        Update: {
          id?: string
          task_id?: string
          user_id?: string | null
          assigned_at?: string
          assigned_by?: string | null
        }
      }
      dev_comments: {
        Row: {
          id: string
          task_id: string
          user_id: string | null
          content: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          task_id: string
          user_id?: string | null
          content: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          task_id?: string
          user_id?: string | null
          content?: string
          created_at?: string
          updated_at?: string
        }
      }
      dev_task_labels: {
        Row: {
          id: string
          project_id: string
          name: string
          color: string
          created_at: string
        }
        Insert: {
          id?: string
          project_id: string
          name: string
          color?: string
          created_at?: string
        }
        Update: {
          id?: string
          project_id?: string
          name?: string
          color?: string
          created_at?: string
        }
      }
      dev_task_label_assignments: {
        Row: {
          id: string
          task_id: string
          label_id: string
          created_at: string
        }
        Insert: {
          id?: string
          task_id: string
          label_id: string
          created_at?: string
        }
        Update: {
          id?: string
          task_id?: string
          label_id?: string
          created_at?: string
        }
      }
    }
  }
}
