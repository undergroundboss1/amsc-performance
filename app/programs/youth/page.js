'use client';
import ProgramDetail from '../../../components/ProgramDetail';
import { programsData } from '../../../lib/programs';

export default function YouthPage() {
  return <ProgramDetail program={{ ...programsData['youth'], slug: 'youth' }} />;
}
