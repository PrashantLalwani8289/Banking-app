import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async() => {

    const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox type="greeting" title="Welcome" user={loggedIn?.name || "Buddy"} subtext="Access and manage your account and transactions efficiently"/>
                <TotalBalanceBox accounts={[]}
                totalBanks={1} totalCurrentBalance={1250.35}></TotalBalanceBox>
            </header>

            Recent Transactions
        </div>

        <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.60}, {currentBalance:123.60}]}></RightSidebar>
    </section>
  )
}

export default Home