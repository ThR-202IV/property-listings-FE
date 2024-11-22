import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";

const ListingItem = ({ listing }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg w-full sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls[0]}
          alt="Property image"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        ></img>
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold text-slate-700 truncate ">
            {listing.name}
          </p>
          <div className="flex items-center gap-1 w-full">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="text-sm text-slate-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-slate-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold">
            ${listing.regularPrice.toLocaleString("en-GB")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex gap-4">
            <div className="font-bold text-xs flex items-center gap-1 mt-1.5">
              <FaBed />
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className="font-bold text-xs flex items-center gap-1 mt-1.5">
              <FaBath />
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingItem;
