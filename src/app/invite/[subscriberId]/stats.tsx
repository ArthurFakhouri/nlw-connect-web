import {
  getSubscribersSubscriberIdRankingClicks,
  getSubscribersSubscriberIdRankingCount,
  getSubscribersSubscriberIdRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

type StatsProps = {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } =
    await getSubscribersSubscriberIdRankingClicks(subscriberId)
  const { count: inviteCount } =
    await getSubscribersSubscriberIdRankingCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscribersSubscriberIdRankingPosition(subscriberId)

  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>

        <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>

        <BadgeCheck className="absolute top-3 left-3 size-5 text-blue" />
      </div>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span
          className={
            'font-heading text-2xl font-semibold leading-none text-gray-200'
          }
        >
          {rankingPosition ? `${rankingPosition}°` : '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>

        <Medal
          className={twMerge(
            'absolute top-3 left-3 size-5 text-purple',
            rankingPosition === 1 ? 'text-gold' : '',
            rankingPosition === 2 ? 'text-silver' : '',
            rankingPosition === 3 ? 'text-bronze' : ''
          )}
        />
      </div>
    </div>
  )
}
