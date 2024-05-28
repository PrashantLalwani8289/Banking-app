import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = {firstName: 'Prashant', lastName: "Lalwani", email: "prashantlalwani@gmail.com"};

  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox type="greeting" title="Welcome" user={loggedIn?.firstName || "Buddy"} subtext="Access and manage your account and transactions efficiently"/>
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