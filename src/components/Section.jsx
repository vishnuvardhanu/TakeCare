import React from 'react'

function Section({title,items}) {
    if (items.length === 0) return null;

  return (
    <div>
      <h2 className="font-bold text-lg text-green-700">{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="list-disc list-inside marker:text-green-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Section