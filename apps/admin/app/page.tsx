import { Card } from '@novacms/ui';

export default function Page() {
  return (
    <div className="grid">
      <Card title="Welcome" description="NovaCMS Admin is running." />
      <Card title="Next steps" description="Configure .env and start the API service." />
    </div>
  );
}
