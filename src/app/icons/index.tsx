import { ArticleLine } from "./ArticleLine";
import { ArtTrack } from "./ArtTrack";
import { BriefcaseColored } from "./BriefcaseColored";
import { BusSign } from "./BusSign";
import { BusSignColored } from "./BusSignColored";
import { ChevronDown } from "./ChevronDown";
import { ChevronLeft } from "./ChevronLeft";
import { ChevronRight } from "./ChevronRight";
import { ClarityOrganizationSolid } from "./ClarityOrganizationSolid";
import { CustomerService } from "./CustomerService";
import { CustomerServiceColored } from "./CustomerServiceColored";
import { District } from "./District";
import { DocumentChecklistColored } from "./DocumentChecklistColored";
import { EcoFactoryColored } from "./EcoFactoryColored";
import { Employee } from "./Employee";
import { Employees } from "./Employees";
import { FolderVideo } from "./FolderVideo";
import { GalleryWideBold } from "./GalleryWideBold";
import { GoalsFill } from "./GoalsFill";
import { GreenEnergy } from "./GreenEnergy";
import { GreenEnergyColored } from "./GreenEnergyColored";
import { GrowthColored } from "./GrowthColored";
import { Hospital } from "./Hospital";
import { HospitalColored } from "./HospitalColored";
import { ImproveRelevance } from "./ImproveRelevance";
import { MapMarkerAlt } from "./MapMarkerAlt";
import { News } from "./News";
import { Office } from "./Office";
import { Park } from "./Park";
import { ParkColored } from "./ParkColored";
import { ScheduleColored } from "./ScheduleColored";
import { School } from "./School";
import { SchoolColored } from "./SchoolColored";
import { Search } from "./Search";
import { ServiceLine } from "./ServiceLine";
import { SmartCity } from "./SmartCity";
import { SmartCityColored } from "./SmartCityColored";
import { StatisticUp } from "./StatisticUp";
import { StatisticUpSolid } from "./StatisticUpSolid";
import { Tax } from "./Tax";
import { Trophy } from "./Trophy";
import { User } from "./User";
import { UserFolderColored } from "./UserFolderColored";
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
  CustomerServiceColored,
  ChevronRight,
  DocumentChecklistColored,
  SmartCityColored,
  BusSignColored,
  SchoolColored,
  BriefcaseColored,
  HospitalColored,
  UserFolderColored,
  GrowthColored,
  ParkColored,
  EcoFactoryColored,
  GreenEnergyColored,
  ChevronLeft,
  ScheduleColored,
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
