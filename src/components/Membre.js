import React from 'react'

const Membre = ({
  firstname,
  lastname,
  age,
  children,
  handleHideFirstname,
  handleHideLastname,
  handleChangeFirst,
  handleChangeLast
}) => {
  const text = 'Rien à déclarer'

  return (
    <>
      <h2
        style={{
          backgroundColor: age < 35 ? '#1c6ec0' : '#342855',
          color: age < 35 ? '#000000' : '#ffffff'
        }}
      >
        {firstname.toLowerCase()} {lastname.toUpperCase()} {age} ans
      </h2>

      <button onClick={handleHideFirstname}>
        Cacher
      </button>
      <input
        value={firstname}
        onChange={handleChangeFirst}
        type='text'
      />

      <button onClick={handleHideLastname}>
        Cacher
      </button>
      <input
        value={lastname}
        onChange={handleChangeLast}
        type='text'
      />
      {children ? <p>{children}</p> : <p>{text}</p>}
    </>
  )
}

export default Membre
