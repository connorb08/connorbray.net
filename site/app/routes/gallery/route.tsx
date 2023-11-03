import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";
import photos from "./photos";
// import "./style.css";
import GalleryHeader from "./header";

export default function () {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event: any, { photo, index }: any) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <>
            <GalleryHeader />
            <div className="w-full h-full bg-black">
                <Gallery
                    photos={photos}
                    direction={"row"}
                    onClick={openLightbox}
                    targetRowHeight={500}
                />
            </div>
            <div className="m-auto">
                {/* @ts-ignore */}
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map((x) => ({
                                    ...x,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>
    );
}
