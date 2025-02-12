import BentoCard from "./BentoCards/BentoCard";
import Footer from "./Footer";

export default function Bento() {
  return (
    <div className="w-full grid grid-cols-[repeat(4,minmax(0,280px))] grid-rows-[repeat(4,minmax(0,136px))] gap-2">
      <BentoCard
        logo="/static/images/logos/xbb.png"
        image="/static/images/cards/xbb.png"
        title="XBackBone"
        color="#111827"
        description="Image uploading with ShareX compatibility."
        className="row-[1]"
        link="https://file.wah.su"
      />
      <BentoCard
        logo="/static/images/logos/matrix.png"
        image="/static/images/cards/matrix.png"
        title="Matrix"
        color="#111827"
        description="An open network for secure, decentralised communication."
        className="row-[1]"
        link="https://chat.wah.su"
      />
      <BentoCard
        type="large"
        logo="/static/images/logos/nextcloud.png"
        image="/static/images/cards/nextcloud.png"
        title="NextCloud"
        color="#fff"
        description="Privacy-Friendly, productivity suite, offering file sharing and collaboration tools."
        className="row-start-1 text-black"
        link="https://cloud.wah.su"
      />
      <BentoCard
        type="big"
        logo="/static/images/logos/vaultwarden.png"
        image="/static/images/cards/vaultwarden.png"
        title="Vaultwarden"
        color="#fff"
        description="Unofficial Bitwarden password manager compatible server."
        className="row-start-2 text-black"
        link="https://vault.wah.su"
      />
      <BentoCard
        type="big"
        logo="/static/images/logos/immich.png"
        image="/static/images/cards/immich.png"
        title="Immich"
        color="#000"
        description="Platform for managing and browsing your photos. Privacy-Friendly Google Photos alternative."
        className="row-start-2"
        link="https://photos.wah.su"
      />
      <BentoCard
        logo="/static/images/logos/linkwarden.png"
        image="/static/images/cards/linkwarden.png"
        title="Linkwarden"
        color="#111827"
        description="Bookmark manager to collect, organize, and preserve webpages."
        className="row-[4]"
        link="https://links.wah.su"
      />
      <Footer className="col-span-full col-start-2" />
    </div>
  );
}
