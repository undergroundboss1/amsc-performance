'use client';
import ProgramDetail from '../../../components/ProgramDetail';
import { programsData } from '../../../lib/programs';

export default function OnlinePage() {
  return <ProgramDetail program={{ ...programsData['online'], slug: 'online' }} />;
}
