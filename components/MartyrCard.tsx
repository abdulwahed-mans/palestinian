import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Martyr } from '@/lib/types';
import { format } from 'date-fns';

interface MartyrCardProps {
  martyr: Martyr;
}

export function MartyrCard({ martyr }: MartyrCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        {martyr.image && (
          <div className="relative h-48 w-full">
            <Image
              src={martyr.image}
              alt={martyr.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{martyr.name}</h3>
          {martyr.arabicName && (
            <p className="text-lg text-gray-600 dark:text-gray-400 font-arabic">
              {martyr.arabicName}
            </p>
          )}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>{format(new Date(martyr.date), 'MMMM d, yyyy')}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{martyr.city ? `${martyr.city}, ${martyr.region}` : martyr.region}</span>
          </div>
          {martyr.event && (
            <div className="mt-2">
              <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                {martyr.event}
              </span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}