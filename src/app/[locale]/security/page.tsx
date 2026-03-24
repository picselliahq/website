import { permanentRedirect } from 'next/navigation';

export default function SecurityRedirect() {
  permanentRedirect('/enterprise');
}
