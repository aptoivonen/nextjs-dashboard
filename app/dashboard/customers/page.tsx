import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function CustomersPage() {
  return <h1 className="text-xl font-bold">Customers page</h1>;
}
