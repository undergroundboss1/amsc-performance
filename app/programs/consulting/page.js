'use client';
import ProgramDetail from '../../../components/ProgramDetail';
import { programsData } from '../../../lib/programs';

export default function ConsultingPage() {
  return <ProgramDetail program={{ ...programsData['consulting'], slug: 'consulting' }} />;
}
