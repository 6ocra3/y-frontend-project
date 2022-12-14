import { DeveloperCard } from './DeveloperCard';
import { DENIS } from '../../static/bio/denis';

export default {
  title: 'DeveloperCard',
  component: DeveloperCard,
};

export const StoryDeveloperCard = () => {
  return <DeveloperCard info={DENIS} />
}