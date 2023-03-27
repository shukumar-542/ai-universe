import React from 'react';

const Items = (props) => {
    console.log(props.item);
    const { name, image, published_in, features } = props.item
    return (

        <div className="card w-full bg-base-100 shadow-2xl">
            <figure><img src={image} alt="Shoes" className='h-48 w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className='font-bold'>features</h2>
                {
                    features.map((feature,index) => <p>{index+1}. {feature}</p>)
                }
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Items;