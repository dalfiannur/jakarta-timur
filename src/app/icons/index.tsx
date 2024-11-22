import { ArrowRight } from "./ArrowRight";
import { ArticleLine } from "./ArticleLine";
import { ArtTrack } from "./ArtTrack";
import { BriefcaseColored } from "./BriefcaseColored";
import { BusSign } from "./BusSign";
import { BusSignColored } from "./BusSignColored";
import { Calendar } from "./Calendar";
import { Camera } from "./Camera";
import { CheckOne } from "./CheckOne";
import { ChevronDown } from "./ChevronDown";
import { ChevronLeft } from "./ChevronLeft";
import { ChevronRight } from "./ChevronRight";
import { CirclePlus } from "./CirclePlus";
import { ClarityOrganizationSolid } from "./ClarityOrganizationSolid";
import { CustomerService } from "./CustomerService";
import { CustomerServiceColored } from "./CustomerServiceColored";
import { District } from "./District";
import { DocumentChecklistColored } from "./DocumentChecklistColored";
import { Download } from "./Download";
import { EcoFactoryColored } from "./EcoFactoryColored";
import { Employee } from "./Employee";
import { Employees } from "./Employees";
import { FacebookColored } from "./FacebookColored";
import { FacebookFill } from "./FacebookFill";
import { FloodWarningColored } from "./FloodWarningColored";
import { FolderVideo } from "./FolderVideo";
import { GalleryWideBold } from "./GalleryWideBold";
import { GlobalIncreaseColored } from "./GlobalIncreaseColored";
import { GoalsFill } from "./GoalsFill";
import { GoogleMapColored } from "./GoogleMapColored";
import { GreenEnergy } from "./GreenEnergy";
import { GreenEnergyColored } from "./GreenEnergyColored";
import { GrowthColored } from "./GrowthColored";
import { Hospital } from "./Hospital";
import { HospitalColored } from "./HospitalColored";
import { ImproveRelevance } from "./ImproveRelevance";
import { Info } from "./Info";
import { InstagramColored } from "./InstagramColored";
import { LayoutList } from "./LayoutList";
import { Link } from "./Link";
import { LinkedInColored } from "./LinkedInColored";
import { MageTrophyColored } from "./MageTrhopyColored";
import { Mail } from "./Mail";
import { MapHomeWork } from "./MapHomeWork";
import { MapMarkerAlt } from "./MapMarkerAlt";
import { Menu } from "./Menu";
import { NetworkSettingLineColored } from "./NetworkSettingLineColored";
import { News } from "./News";
import { Office } from "./Office";
import { OutlineShare } from "./OutlineShare";
import { Park } from "./Park";
import { ParkColored } from "./ParkColored";
import { ParkMultiColored } from "./ParkMultiColored";
import { PcCovidColored } from "./PcCovidColored";
import { Pdf } from "./Pdf";
import { Phone } from "./Phone";
import { QuillWrite } from "./QuillWrite";
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
import { UserRoundedBoldDuotone } from "./UserRoundedBoldDuotone";
import { Users } from "./Users";
import { Vacation } from "./Vacation";
import { XColored } from "./XColored";
import { XGrey } from "./XGrey";
import { YoutubeColored } from "./YoutubeColored";
import { WhatsappColored } from "@/app/icons/WhatsappColored";

const icons = {
  LayoutList,
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
  MapHomeWork,
  Mail,
  FacebookColored,
  XColored,
  YoutubeColored,
  LinkedInColored,
  InstagramColored,
  MageTrophyColored,
  GlobalIncreaseColored,
  FloodWarningColored,
  NetworkSettingLineColored,
  PcCovidColored,
  Calendar,
  QuillWrite,
  Camera,
  Info,
  CirclePlus,
  GoogleMapColored,
  ParkMultiColored,
  Phone,
  CheckOne,
  ArrowRight,
  UserRoundedBoldDuotone,
  OutlineShare,
  XGrey,
  WhatsappColored,
  Pdf,
  Download,
  Link,
  FacebookFill,
  Menu,
};

export type IconKeys = keyof typeof icons;

interface IconProps {
  name: IconKeys;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  const IconNode = icons[name];
  return (
    <i className={`inline-block ${className}`}>{IconNode && <IconNode />}</i>
  );
};
