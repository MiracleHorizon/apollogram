const AuthError = () => (
  <div className='w-screen h-screen flex items-center justify-center'>
    <main className='max-w-[420px]'>
      <h1 className='text-[26px] text-center font-medium'>
        Произошла ошибка авторизации, попробуйте еще раз
      </h1>
      <div className='w-full mt-[24px] flex items-center justify-center'>
        <button className='h-[44px] px-[12px] rounded-[8px] border-[1px] text-[16px] shadow shadow-black-500/50 hover:bg-gray-100'>
          Попробовать еще раз
        </button>
      </div>
    </main>
  </div>
)

export default AuthError
