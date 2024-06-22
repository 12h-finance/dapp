'use client'
import ConnectCollaterall from '@/components/connect-collaterall'
import SupplyRWAModal from '@/components/supply-rwa'
import use12h from '@/hooks/use12h'

import { cn } from '@/lib/utils'
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core'

const available = '14 SPX'

const Dashboard = () => {
  const { isAuthenticated } = useDynamicContext()
  const { hasCollaterallConnected } = use12h()

  return (
    <div className={cn('grid place-items-center')}>
      <DashboardTitle className={'my-[60px]'} />
      <div className={'flex gap-4'}>
        <div
          className={cn(
            'flex h-[285px] w-[652px] flex-col',
            'rounded-[14px] bg-white',
            'divide-y divide-solid',
          )}
        >
          <div className={'my-4 text-center font-bold text-[#0C0C4F]'}>
            <span>{'Your RWA Collaterall'}</span>
            {/* test comment */}
          </div>
          <div
            className={cn(
              'grid place-content-center place-items-center pt-[65px]',
              'text-center',
            )}
          >
            <span className={'text-[#8592AD]'}>
              {'You have no collaterall yet'}
            </span>
            {isAuthenticated ? (
              hasCollaterallConnected ? (
                <SupplyRWAModal available={available} />
              ) : (
                <ConnectCollaterall />
              )
            ) : (
              <DynamicWidget />
            )}
          </div>
        </div>
        <div
          className={cn(
            'flex h-[285px] w-[652px] flex-col',
            'rounded-[14px] bg-white',
            'divide-y divide-solid',
          )}
        >
          <div className={'my-4 text-center font-bold text-[#0C0C4F]'}>
            <span>{'Your crypto borrows'}</span>
          </div>
          <div
            className={cn(
              'grid place-content-center place-items-center pt-[65px]',
              'text-center',
            )}
          >
            {'TO BE Continued ...'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

type DashboardTitleProps = { className?: string }
const DashboardTitle = ({ className }: DashboardTitleProps) => (
  <svg
    className={className}
    width='382'
    height='39'
    viewBox='0 0 382 39'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clip-path='url(#clip0_72_697)'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 19.5C0 28.3366 7.16325 35.5 15.9998 35.5C24.8363 35.5 32 28.3366 32 19.5C32 10.6634 24.8363 3.5 15.9998 3.5C7.16325 3.5 0 10.6634 0 19.5Z'
        fill='#0C0C4F'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.79426 15.3967L9.11928 14.3925C9.18531 14.1883 9.34653 14.0293 9.55146 13.9667L10.5605 13.6563C10.7002 13.6137 10.7014 13.4166 10.5628 13.3717L9.55831 13.0467C9.35443 12.9806 9.19551 12.8194 9.13251 12.6144L8.82257 11.6053C8.77991 11.466 8.58288 11.4645 8.53791 11.6034L8.2129 12.6076C8.14687 12.8114 7.98565 12.9704 7.78067 13.0334L6.77162 13.3434C6.63195 13.3864 6.63044 13.5831 6.76936 13.628L7.77387 13.953C7.97772 14.0191 8.13666 14.1807 8.19967 14.3857L8.5096 15.3944C8.55226 15.5341 8.7493 15.5356 8.79426 15.3967Z'
        fill='#FAFAFA'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M27.9993 15.2065C27.4965 14.6725 26.7117 14.3718 25.9488 14.2485C25.1797 14.1301 24.3735 14.1411 23.6142 14.2692C22.0781 14.516 20.6826 15.1201 19.4655 15.8652C18.8333 16.231 18.2943 16.6542 17.7359 17.0852C17.4668 17.3031 17.2215 17.5353 16.966 17.7641L16.2678 18.4238C15.5093 19.1768 14.7616 19.8627 14.0382 20.4312C13.3119 20.9971 12.6328 21.4269 11.9636 21.727C11.2948 22.0287 10.5792 22.2061 9.64647 22.2345C8.72196 22.2655 7.62806 22.107 6.45802 21.8455C5.28167 21.585 4.04641 21.2138 2.66602 20.8944C3.14767 22.1635 3.87298 23.285 4.80419 24.3101C5.74632 25.3174 6.92276 26.2356 8.43405 26.8394C9.92348 27.4567 11.7953 27.6782 13.5455 27.3439C15.3003 27.0232 16.8402 26.2519 18.085 25.36C19.3329 24.459 20.3425 23.4326 21.1937 22.3657C21.4287 22.0708 21.553 21.9059 21.723 21.6754L22.1929 21.0143C22.5196 20.6053 22.8169 20.1396 23.1401 19.7345C23.7739 18.8858 24.3988 18.0383 25.1249 17.2573C25.4904 16.8613 25.8756 16.4824 26.3306 16.1183C26.5575 15.9406 26.8027 15.7667 27.0742 15.61C27.3499 15.441 27.6409 15.3088 27.9993 15.2065Z'
        fill='#FF4F0A'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M27.9993 14.7421C27.4591 13.3207 26.4549 12.1242 25.107 11.2413C23.7673 10.3682 21.9064 9.92256 20.0626 10.3024C19.1517 10.4861 18.2692 10.8398 17.4947 11.3108C16.7237 11.7799 16.0328 12.3446 15.4348 12.9505C15.1363 13.2544 14.8652 13.5714 14.596 13.8903L13.8981 14.818L12.8204 16.3113C11.4463 18.2328 9.96668 20.4845 7.53854 21.1518C5.15478 21.8068 4.12089 21.2267 2.66602 20.9871C2.93203 21.7032 3.26156 22.3987 3.70828 23.0105C4.14668 23.6348 4.6645 24.2211 5.30829 24.7236C5.63364 24.965 5.97713 25.2032 6.35863 25.4053C6.73838 25.6005 7.14793 25.7723 7.58505 25.9017C8.45457 26.1502 9.43344 26.2372 10.3813 26.1035C11.3296 25.9716 12.236 25.6583 13.0282 25.2421C13.8263 24.8298 14.5215 24.3278 15.1423 23.7979C16.3764 22.7293 17.3363 21.5486 18.1471 20.355C18.5549 19.7583 18.9251 19.1503 19.2675 18.5421L19.6705 17.8181C19.7937 17.6065 19.9183 17.3935 20.0449 17.1952C20.5555 16.3984 21.0549 15.7595 21.6615 15.2799C22.2598 14.788 23.0927 14.4245 24.2058 14.34C25.3143 14.2547 26.594 14.4125 27.9993 14.7421Z'
        fill='#FAFAFA'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M22.666 26.834C22.666 27.9383 23.2633 28.834 23.9997 28.834C24.7361 28.834 25.3327 27.9383 25.3327 26.834C25.3327 25.7297 24.7361 24.834 23.9997 24.834C23.2633 24.834 22.666 25.7297 22.666 26.834Z'
        fill='#EC796B'
      />
      <path
        d='M41.0312 24.5781H45.5781C45.6823 25.4948 46.1667 26.2396 47.0312 26.8125C47.9062 27.375 48.974 27.6562 50.2344 27.6562C51.4844 27.6562 52.5 27.3906 53.2812 26.8594C54.0729 26.3177 54.4688 25.6302 54.4688 24.7969C54.4688 24.0677 54.1771 23.4792 53.5938 23.0312C53.0104 22.5833 52.0365 22.2083 50.6719 21.9062L47.7344 21.2656C43.599 20.3802 41.5312 18.2812 41.5312 14.9688C41.5312 12.9062 42.3333 11.2396 43.9375 9.96875C45.5521 8.69792 47.625 8.0625 50.1562 8.0625C52.7604 8.0625 54.8385 8.68229 56.3906 9.92188C57.9427 11.151 58.7396 12.7917 58.7812 14.8438H54.3594C54.2865 13.8958 53.8646 13.151 53.0938 12.6094C52.3333 12.0573 51.3594 11.7812 50.1719 11.7812C49.0052 11.7812 48.0625 12.0365 47.3438 12.5469C46.6354 13.0573 46.2812 13.7292 46.2812 14.5625C46.2812 15.25 46.5677 15.8073 47.1406 16.2344C47.724 16.6615 48.6667 17.026 49.9688 17.3281L52.7031 17.9062C54.9635 18.3854 56.6094 19.1354 57.6406 20.1562C58.6719 21.1667 59.1875 22.5312 59.1875 24.25C59.1875 26.4375 58.3646 28.1771 56.7188 29.4688C55.0729 30.75 52.849 31.3906 50.0469 31.3906C47.3281 31.3906 45.1615 30.7865 43.5469 29.5781C41.9427 28.3594 41.1042 26.6927 41.0312 24.5781ZM62.9219 10.3906H67.4844V14.25H70.5781V17.6875H67.4844V25.7031C67.4844 26.9635 68.1406 27.5938 69.4531 27.5938C69.8802 27.5938 70.25 27.5677 70.5625 27.5156V30.875C70.0312 31 69.3073 31.0625 68.3906 31.0625C66.4219 31.0625 65.0156 30.7083 64.1719 30C63.3385 29.2917 62.9219 28.1198 62.9219 26.4844V17.6875H60.5625V14.25H62.9219V10.3906ZM79.3906 27.9688C80.401 27.9688 81.2552 27.6771 81.9531 27.0938C82.6615 26.5 83.0156 25.7552 83.0156 24.8594V23.6406L79.4844 23.8594C78.6302 23.9219 77.9688 24.1354 77.5 24.5C77.0417 24.8646 76.8125 25.3438 76.8125 25.9375C76.8125 26.5625 77.0469 27.0573 77.5156 27.4219C77.9844 27.7865 78.6094 27.9688 79.3906 27.9688ZM77.8906 31.2656C76.276 31.2656 74.9375 30.7917 73.875 29.8438C72.8125 28.8958 72.2812 27.6771 72.2812 26.1875C72.2812 24.6667 72.8438 23.474 73.9688 22.6094C75.0938 21.7448 76.7031 21.25 78.7969 21.125L83.0156 20.875V19.7656C83.0156 18.9948 82.7604 18.3906 82.25 17.9531C81.75 17.5156 81.0677 17.2969 80.2031 17.2969C79.3698 17.2969 78.6875 17.4844 78.1562 17.8594C77.6354 18.2344 77.3177 18.7396 77.2031 19.375H73.0312C73.1146 17.7292 73.8177 16.4062 75.1406 15.4062C76.4635 14.3958 78.2188 13.8906 80.4062 13.8906C82.5521 13.8906 84.2708 14.401 85.5625 15.4219C86.8542 16.4427 87.5 17.7969 87.5 19.4844V31H83.0938V28.4375H83C82.5417 29.3125 81.8438 30.0052 80.9062 30.5156C79.9688 31.0156 78.9635 31.2656 77.8906 31.2656ZM90.4531 31V14.25H94.8594V17.2656H94.9531C95.2448 16.2031 95.7344 15.3906 96.4219 14.8281C97.1094 14.2656 97.9479 13.9844 98.9375 13.9844C99.4167 13.9844 99.849 14.0417 100.234 14.1562V18.1719C99.8073 17.9948 99.2552 17.9062 98.5781 17.9062C97.4531 17.9062 96.5781 18.2344 95.9531 18.8906C95.3281 19.5469 95.0156 20.4635 95.0156 21.6406V31H90.4531ZM106.844 20.9688L112.531 14.25H117.703L111.312 21.4375L118.016 31H112.766L107.969 24.1875L106.781 25.4688V31H102.219V8.45312H106.781V20.9688H106.844ZM119.328 31V14.25H123.734V17.2344H123.828C124.286 16.1719 124.953 15.3594 125.828 14.7969C126.714 14.224 127.792 13.9375 129.062 13.9375C130.917 13.9375 132.349 14.4896 133.359 15.5938C134.37 16.6979 134.875 18.2344 134.875 20.2031V31H130.312V21.1562C130.312 20.0521 130.052 19.2031 129.531 18.6094C129.01 18.0156 128.245 17.7188 127.234 17.7188C126.224 17.7188 125.411 18.0573 124.797 18.7344C124.193 19.4115 123.891 20.2969 123.891 21.3906V31H119.328ZM145.281 17.2656C144.292 17.2656 143.464 17.6042 142.797 18.2812C142.141 18.9583 141.771 19.8229 141.688 20.875H148.797C148.745 19.8021 148.396 18.9323 147.75 18.2656C147.115 17.599 146.292 17.2656 145.281 17.2656ZM148.859 25.875H153.047C152.797 27.5208 151.974 28.849 150.578 29.8594C149.193 30.8594 147.469 31.3594 145.406 31.3594C142.833 31.3594 140.812 30.5885 139.344 29.0469C137.885 27.5052 137.156 25.3906 137.156 22.7031C137.156 20.026 137.885 17.8906 139.344 16.2969C140.802 14.6927 142.766 13.8906 145.234 13.8906C147.661 13.8906 149.594 14.651 151.031 16.1719C152.469 17.6927 153.188 19.7292 153.188 22.2812V23.6719H141.641V23.9531C141.641 25.151 141.99 26.125 142.688 26.875C143.396 27.6146 144.328 27.9844 145.484 27.9844C146.318 27.9844 147.036 27.7969 147.641 27.4219C148.245 27.0365 148.651 26.5208 148.859 25.875ZM156.766 10.3906H161.328V14.25H164.422V17.6875H161.328V25.7031C161.328 26.9635 161.984 27.5938 163.297 27.5938C163.724 27.5938 164.094 27.5677 164.406 27.5156V30.875C163.875 31 163.151 31.0625 162.234 31.0625C160.266 31.0625 158.859 30.7083 158.016 30C157.182 29.2917 156.766 28.1198 156.766 26.4844V17.6875H154.406V14.25H156.766V10.3906ZM178.375 12.1406V19.3281H182.438C183.625 19.3281 184.547 19.0104 185.203 18.375C185.87 17.7396 186.203 16.8594 186.203 15.7344C186.203 14.6406 185.859 13.7708 185.172 13.125C184.484 12.4688 183.557 12.1406 182.391 12.1406H178.375ZM178.375 22.75V31H173.656V8.45312H182.891C185.464 8.45312 187.464 9.09375 188.891 10.375C190.328 11.6458 191.047 13.401 191.047 15.6406C191.047 17.1094 190.682 18.4219 189.953 19.5781C189.234 20.724 188.234 21.5469 186.953 22.0469L191.703 31H186.359L182.156 22.75H178.375ZM207.406 15.5938L203.125 31H198.672L192.703 8.45312H197.594L201.141 24.7812H201.266L205.484 8.45312H209.469L213.688 24.7812H213.812L217.375 8.45312H222.266L216.281 31H211.828L207.547 15.5938H207.406ZM237.453 31L235.734 25.5312H227.812L226.094 31H221.25L229.078 8.45312H234.625L242.469 31H237.453ZM231.719 12.7656L228.828 22H234.719L231.828 12.7656H231.719ZM275 31H270.797V15.7812H270.672L264.547 30.7812H261.578L255.453 15.7812H255.328V31H251.125V8.45312H256.594L263 24.4375H263.125L269.531 8.45312H275V31ZM284.453 27.9688C285.464 27.9688 286.318 27.6771 287.016 27.0938C287.724 26.5 288.078 25.7552 288.078 24.8594V23.6406L284.547 23.8594C283.693 23.9219 283.031 24.1354 282.562 24.5C282.104 24.8646 281.875 25.3438 281.875 25.9375C281.875 26.5625 282.109 27.0573 282.578 27.4219C283.047 27.7865 283.672 27.9688 284.453 27.9688ZM282.953 31.2656C281.339 31.2656 280 30.7917 278.938 29.8438C277.875 28.8958 277.344 27.6771 277.344 26.1875C277.344 24.6667 277.906 23.474 279.031 22.6094C280.156 21.7448 281.766 21.25 283.859 21.125L288.078 20.875V19.7656C288.078 18.9948 287.823 18.3906 287.312 17.9531C286.812 17.5156 286.13 17.2969 285.266 17.2969C284.432 17.2969 283.75 17.4844 283.219 17.8594C282.698 18.2344 282.38 18.7396 282.266 19.375H278.094C278.177 17.7292 278.88 16.4062 280.203 15.4062C281.526 14.3958 283.281 13.8906 285.469 13.8906C287.615 13.8906 289.333 14.401 290.625 15.4219C291.917 16.4427 292.562 17.7969 292.562 19.4844V31H288.156V28.4375H288.062C287.604 29.3125 286.906 30.0052 285.969 30.5156C285.031 31.0156 284.026 31.2656 282.953 31.2656ZM295.516 31V14.25H299.922V17.2656H300.016C300.307 16.2031 300.797 15.3906 301.484 14.8281C302.172 14.2656 303.01 13.9844 304 13.9844C304.479 13.9844 304.911 14.0417 305.297 14.1562V18.1719C304.87 17.9948 304.318 17.9062 303.641 17.9062C302.516 17.9062 301.641 18.2344 301.016 18.8906C300.391 19.5469 300.078 20.4635 300.078 21.6406V31H295.516ZM311.906 20.9688L317.594 14.25H322.766L316.375 21.4375L323.078 31H317.828L313.031 24.1875L311.844 25.4688V31H307.281V8.45312H311.844V20.9688H311.906ZM331.125 17.2656C330.135 17.2656 329.307 17.6042 328.641 18.2812C327.984 18.9583 327.615 19.8229 327.531 20.875H334.641C334.589 19.8021 334.24 18.9323 333.594 18.2656C332.958 17.599 332.135 17.2656 331.125 17.2656ZM334.703 25.875H338.891C338.641 27.5208 337.818 28.849 336.422 29.8594C335.036 30.8594 333.312 31.3594 331.25 31.3594C328.677 31.3594 326.656 30.5885 325.188 29.0469C323.729 27.5052 323 25.3906 323 22.7031C323 20.026 323.729 17.8906 325.188 16.2969C326.646 14.6927 328.609 13.8906 331.078 13.8906C333.505 13.8906 335.438 14.651 336.875 16.1719C338.312 17.6927 339.031 19.7292 339.031 22.2812V23.6719H327.484V23.9531C327.484 25.151 327.833 26.125 328.531 26.875C329.24 27.6146 330.172 27.9844 331.328 27.9844C332.161 27.9844 332.88 27.7969 333.484 27.4219C334.089 27.0365 334.495 26.5208 334.703 25.875ZM342.609 10.3906H347.172V14.25H350.266V17.6875H347.172V25.7031C347.172 26.9635 347.828 27.5938 349.141 27.5938C349.568 27.5938 349.938 27.5677 350.25 27.5156V30.875C349.719 31 348.995 31.0625 348.078 31.0625C346.109 31.0625 344.703 30.7083 343.859 30C343.026 29.2917 342.609 28.1198 342.609 26.4844V17.6875H340.25V14.25H342.609V10.3906Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_72_697'>
        <rect width='382' height='39' rx='4' fill='white' />
      </clipPath>
    </defs>
  </svg>
)
