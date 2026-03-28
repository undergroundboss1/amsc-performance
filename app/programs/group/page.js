'use client';
import ProgramDetail from '../../../components/ProgramDetail';
import { programsData } from '../../../lib/programs';

export default function GroupPage() {
  return <ProgramDetail program={{ ...programsData['group'], slug: 'group' }} />;
}
