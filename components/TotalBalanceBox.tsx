import { formatAmount } from '@/lib/utils'
import { Doughnut } from 'react-chartjs-2';
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart';
// import CountUP from 'react-countup'

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}:TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts}></DoughnutChart>

        </div>
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts: {totalBanks}    
            </h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>

                <div className='total-balance-amount flex-center gap-2'> 
                    <AnimatedCounter amount={totalCurrentBalance}></AnimatedCounter>
    
                </div>
            </div>

        </div>
    </section>
  )
}

export default TotalBalanceBox