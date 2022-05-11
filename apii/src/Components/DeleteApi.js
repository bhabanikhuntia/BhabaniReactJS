import React from 'react'

export default function DeleteApi() {

    const deleteApi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
    }
  return (
    <div>

    </div>
  )
}
