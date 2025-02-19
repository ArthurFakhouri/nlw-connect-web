import Image from 'next/image'
import medalBronze from '../../assets/medal-bronze.svg'
import medalGold from '../../assets/medal-gold.svg'
import medalSilver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicação
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Arthur Fakhouri
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image
            src={medalGold}
            alt="gold medal"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Arthur Fakhouri
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            930
          </span>

          <Image
            src={medalSilver}
            alt="silver medal"
            className="absolute top-0 right-8"
          />
        </div>
        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Arthur Fakhouri
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            800
          </span>

          <Image
            src={medalBronze}
            alt="bronze medal"
            className="absolute top-0 right-8"
          />
        </div>
      </div>
    </div>
  )
}
