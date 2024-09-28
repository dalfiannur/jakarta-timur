import { ArticleLine } from "./ArticleLine";
import { ArtTrack } from "./ArtTrack";
import { BusSign } from "./BusSign";
import { ChevronDown } from "./ChevronDown";
import { ClarityOrganizationSolid } from "./ClarityOrganizationSolid";
import { CustomerService } from "./CustomerService";
import { District } from "./District";
import { Employee } from "./Employee";
import { Employees } from "./Employees";
import { FolderVideo } from "./FolderVideo";
import { GalleryWideBold } from "./GalleryWideBold";
import { GoalsFill } from "./GoalsFill";
import { GreenEnergy } from "./GreenEnergy";
import { Hospital } from "./Hospital";
import { ImproveRelevance } from "./ImproveRelevance";
import { MapMarkerAlt } from "./MapMarkerAlt";
import { News } from "./News";
import { Office } from "./Office";
import { Park } from "./Park";
import { School } from "./School";
import { Search } from "./Search";
import { ServiceLine } from "./ServiceLine";
import { SmartCity } from "./SmartCity";
import { StatisticUp } from "./StatisticUp";
import { StatisticUpSolid } from "./StatisticUpSolid";
import { Tax } from "./Tax";
import { Trophy } from "./Trophy";
import { User } from "./User";
import { Users } from "./Users";
import { Vacation } from "./Vacation";

const icons = {
  ChevronDown,
  Search,
  GoalsFill,
  MapMarkerAlt,
  StatisticUp,
  StatisticUpSolid,
  Trophy,
  ClarityOrganizationSolid,
  User,
  Users,
  Employees,
  Employee,
  District,
  Office,
  School,
  Hospital,
  BusSign,
  SmartCity,
  ServiceLine,
  Tax,
  CustomerService,
  Vacation,
  ArtTrack,
  Park,
  GreenEnergy,
  ImproveRelevance,
  News,
  GalleryWideBold,
  FolderVideo,
  ArticleLine,
};

interface IconProps {
  name: keyof typeof icons;
  size?: number;
}

export const Icon = ({ name, size = 24 }: IconProps) => {
  const IconNode = icons[name];
  return (
    <div style={{ width: size, height: size }}>
      <IconNode />
    </div>
  );
};
