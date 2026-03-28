'use client';
import ProgramDetail from '../../../components/ProgramDetail';
import { programsData } from '../../../lib/programs';

export default function OneOnOnePage() {
  return <ProgramDetail program={{ ...programsData['one-on-one'], slug: 'one-on-one' }} />;
}
