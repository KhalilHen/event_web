export default function AdminPage() {
  return (
    <div>
      {/* Appbar container */}
      <div className='flex flex-col justify-center align-middle'>
        <div className='flex justify-center pt-40'>
          <h1> Admin page</h1>
        </div>
      </div>

      {/* Title container */}
      <div className='flex flex-row justify-center pt-40 -space-x-60'>
        <div
          className='flex justify-center space-x-52
        '
        >
          <div className='flex flex-col justify-between h-52'>
            <h1>Events</h1>

            <button>
              <span>View events</span>
            </button>
          </div>
          <div className='flex flex-col justify-between h-52'>
            <h1>Event category</h1>
            <button className='flex flex-col items-center mr-2.5 p-2.5 text-lg'>
              <span>Event category</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
    // >
    //   <button
    //     style={{
    //       className: 'flex flex-col items-center mr-2.5 p-2.5 text-lg',
    //     }}
    //   >
    //     <span>Column 1</span>
    //     <span>Text 1</span>
    //   </button>
    //   <button
    //     style={{
    //       display: 'flex',
    //       flexDirection: 'column',
    //       alignItems: 'center',
    //       padding: '10px 20px',
    //       fontSize: '16px',
    //     }}
    //   >
    //     <span>Column 2</span>
    //     <span>Text 2</span>
    //   </button>
    // </div>
  );
}
