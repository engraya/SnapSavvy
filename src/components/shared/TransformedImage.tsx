"use client"

import { dataUrl, debounce, download, getImageSize } from '@src/lib/utils'
import { CldImage, getCldImageUrl } from 'next-cloudinary'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

const TransformedImage = ({ image, type, title, transformationConfig, isTransforming, setIsTransforming, hasDownload = false }: TransformedImageProps) => {
  const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!image?.publicId) return;

    download(getCldImageUrl({
      width: image.width,
      height: image.height,
      src: image.publicId,
      ...transformationConfig
    }), title)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="h3-bold gradient-accent-text">
          Transformed
        </h3>

        {hasDownload && (
          <button
            className="download-btn"
            onClick={downloadHandler}
          >
            <Image
              src="/assets/icons/download.svg"
              alt=""
              width={16}
              height={16}
            />
            Download
          </button>
        )}
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="relative">
          <CldImage 
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            src={image.publicId}
            alt={image.title ?? "Transformed image"}
            sizes={"(max-width: 767px) 100vw, 50vw"}
            placeholder={dataUrl as PlaceholderValue}
            className="transformed-image"
            onLoad={() => {
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000)()
            }}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="transforming-loader">
              <Image 
                src="/assets/icons/spinner.svg"
                width={50}
                height={50}
                alt="spinner"
              />
              <p className="text-white/80">Applying Transformations, Please wait...</p>
            </div>
          )}
        </div>
      ): (
        <div className="transformed-placeholder">
          <div className="flex flex-col items-center gap-2 opacity-60">
            <Image src="/assets/icons/stars.svg" alt="" width={32} height={32} className="opacity-40" />
            <p className="p-14-medium text-slate-500 dark:text-slate-400 text-center">
              Apply a transformation to see the result here
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default TransformedImage