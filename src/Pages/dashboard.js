import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      Template
      <div className ="w-[350px] border rounded-lg bg-white flex flex-col gap-[12px] p-[16px]">
        <div className="p-[12px] flex justify-center items-center gap-[8px] ">
            <img
            src=""
            alt="sample1Img"
            />
            <div className="flex flex-col gap-[8px]">
                <div className="font-semibold text-[14px]">resume-builder-react-app</div>
                <div className="font-medium text-[14px]">resume-builder-react-app <span className="text-[10px]">vercel.app</span></div>

            </div>
        </div>
        <div claaName="text-[14px]">update</div>
        <div className="text-[12px]" >From main</div>
        <div className="text-[12px]">10 days ago</div>

      </div>
    </div>
  )
}

export default DashboardPage
