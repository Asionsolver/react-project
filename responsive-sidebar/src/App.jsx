import {
  Calendar,
  Flag,
  Home,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  StickyNote
} from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { SidebarItems } from './components/SidebarItems';
export default function App() {

  return (
    <>
      <div className="flex">
        <Sidebar >
        <SidebarItems icon={<Home size={20}/>} text='Home' alert/>
        <SidebarItems icon={<LayoutDashboard size={20}/>} text='Dashboard' active/>
        <SidebarItems icon={<StickyNote size={20} />} text="Projects" alert />
          <SidebarItems icon={<Calendar size={20} />} text="Calendar" />
          <SidebarItems icon={<Layers size={20} />} text="Tasks" />
          <SidebarItems icon={<Flag size={20} />} text="Reporting" />
          <hr className="my-3" />
          <SidebarItems icon={<Settings size={20} />} text="Settings" />
          <SidebarItems icon={<LifeBuoy size={20} />} text="Help" />
        </Sidebar>
      </div>
    </>
  )
}