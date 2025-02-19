import { getRanking } from '@/http/api'
import Image from 'next/image'
import medalBronze from '../../../assets/medal-bronze.svg'
import medalGold from '../../../assets/medal-gold.svg'
import medalSilver from '../../../assets/medal-silver.svg'
import medalUser from '../../../assets/medal-user.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicação
      </h2>

      <div className="space-y-4">
        {ranking.map((top, index) => {
          const rankingPosition = index + 1

          const medalsRanking = {
            1: medalGold,
            2: medalSilver,
            3: medalBronze,
          }

          const topMedal =
            rankingPosition > 3
              ? medalUser
              : medalsRanking[rankingPosition as keyof typeof medalsRanking]

          return (
            <div
              key={top.subscriberId}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{rankingPosition}º</span> |{' '}
                {top.name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {top.score}
              </span>

              <Image src={topMedal} alt="" className="absolute top-0 right-8" />
            </div>
          )
        })}
      </div>
    </div>
  )
}
