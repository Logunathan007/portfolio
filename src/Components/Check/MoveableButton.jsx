import React, {useState, useEffect, useRef} from "react";
import "./MovableButton.css"

const MoveableButton = () => {
  const [fl, setFl] = useState(false);
    const buttonRef = useRef(null);

    const distanceBetween = (p1x, p1y, p2x, p2y) => {
        const dx = p1x - p2x;
        const dy = p1y - p2y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (fl) return;

            const button = buttonRef.current;
            const radius = Math.max(button.offsetWidth * 0.75, button.offsetHeight * 0.75, 100);

            const bx = button.parentNode.offsetLeft + button.offsetLeft + button.offsetWidth / 2;
            const by = button.parentNode.offsetTop + button.offsetTop + button.offsetHeight / 2;

            const dist = distanceBetween(event.clientX, event.clientY, bx, by) * 2;
            const angle = Math.atan2(event.clientY - by, event.clientX - bx);

            const ox = -1 * Math.cos(angle) * Math.max((radius - dist), 0);
            const oy = -1 * Math.sin(angle) * Math.max((radius - dist), 0);

            const rx = oy / 2;
            const ry = -ox / 2;

            button.style.transition = `all 0.1s ease`;
            button.style.transform = `translate(${ox}px, ${oy}px) rotateX(${rx}deg) rotateY(${ry}deg)`;
            button.style.boxShadow = `0px ${Math.abs(oy)}px ${Math.abs(oy) / radius * 40}px rgba(0,0,0,0.15)`;
        };

        document.addEventListener('', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [fl]);

    const handleChange = () => {
        setFl(!fl);
    };

    return (
        <div style={{display: "grid", placeItems: "center"}}>    
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque consequuntur placeat a pariatur ex odio enim eaque, iusto aspernatur culpa ad eius quaerat deserunt, repellat laudantium ut neque. Ex fugit reiciendis tenetur minima nulla, nesciunt rerum ipsum illum. Dignissimos excepturi fugit doloremque error ratione ducimus itaque ad laboriosam explicabo perferendis, ipsa et vero ipsam maiores rerum recusandae quo sit! Non qui laboriosam maxime debitis voluptate, asperiores culpa, atque quam, eaque voluptas quaerat quis necessitatibus pariatur blanditiis cum? Rerum ad nostrum ducimus, repellendus laborum ab fugiat eum incidunt placeat natus distinctio velit at dolore hic eveniet exercitationem? Dolor tenetur in laboriosam
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi illo fuga voluptatum excepturi? Nemo excepturi natus perferendis facilis, nostrum dolore maxime impedit consequuntur placeat ratione quisquam fuga voluptates quos. Reprehenderit accusantium, iure ex harum accusamus eligendi dolor aut minus consectetur ducimus dolores distinctio deserunt optio temporibus quae fugiat labore ad. Quo ea, delectus atque harum asperiores cumque quaerat sequi deleniti, temporibus alias omnis eius cupiditate hic dolore. Possimus, dolorem. Laudantium quos illum vero omnis praesentium fuga ducimus aliquid eaque tempore inventore illo expedita a perspiciatis sunt ipsam, mollitia eius possimus laborum. Quidem quas incidunt placeat, debitis quos vel ipsum corporis odio laborum doloremque neque tenetur, maiores ipsam dolorem! A, quibusdam maxime. Tempora consequuntur atque maiores obcaecati qui quae ad dolorem quo inventore numquam repudiandae aspernatur dolor doloribus sed, ab sint velit! Ab, porro. Nisi doloremque commodi tenetur. Non tenetur, obcaecati impedit earum totam sed iste magni cumque ad assumenda ex quaerat. Explicabo tenetur sequi harum, nulla nihil unde labore mollitia cum, temporibus similique ad rem. Pariatur, quae laboriosam totam officia architecto delectus. Commodi mollitia beatae ex assumenda, maiores quos possimus quod officiis numquam ipsum cum magni vel labore odit natus laborum consequatur nulla autem iure fugit et tenetur tempora voluptatem. Accusantium repellendus, quibusdam, quod veniam cumque harum vel dicta consequatur distinctio itaque voluptate praesentium error tempora sint! Quo numquam explicabo laudantium ipsa cupiditate veritatis at id aut voluptates nulla. Est, placeat repellat rem voluptas quisquam ea, ipsum a eos, suscipit maxime mollitia. Maxime quasi facere voluptatem perspiciatis? Libero perferendis, quod laborum distinctio ipsa magnam, deserunt dicta voluptate similique voluptatibus ut labore optio at quas unde officiis, ullam dolore veniam. Aliquid, natus illum ea quibusdam error repudiandae quam molestias qui cum aliquam asperiores blanditiis. Similique optio quidem culpa explicabo expedita corporis eius beatae, dolor sunt, nulla earum eveniet labore obcaecati voluptatibus sint. Placeat eos reprehenderit excepturi reiciendis laborum esse, aliquam sit commodi nemo qui odio nihil perferendis porro consectetur. Quis rerum nisi aspernatur possimus ad aperiam nobis nam saepe. Eveniet accusamus obcaecati repellat magni earum consequuntur a provident iusto assumenda veniam nam delectus fugit ad similique, libero recusandae alias cum. Provident molestiae tenetur neque ducimus, libero est! Quod exercitationem aperiam, sint asperiores perferendis voluptatibus doloribus sequi laboriosam voluptatem libero modi architecto sed ut odit commodi reprehenderit quas iusto, numquam quasi totam ipsam fuga nobis! Odio suscipit quo accusantium itaque nemo hic dolore quia dicta! Illo error, quo optio vitae quis saepe ullam quod nesciunt officia dolor, asperiores maiores eveniet voluptates architecto, ex corrupti neque! Ipsum qui exercitationem consectetur suscipit sint numquam veritatis modi corporis velit, laboriosam nihil, perferendis vero hic ex dolorem aliquam eaque saepe temporibus! Inventore ullam laudantium ipsam, est ad sint quod a officiis eaque. Eaque, perferendis cum. Tempora, earum dolore. Similique sed tempore, animi aliquid veritatis quidem nesciunt? Et dicta esse iure rerum ipsum nobis. Necessitatibus cupiditate, exercitationem quisquam optio praesentium molestias hic nemo eius deleniti nisi. Ex tempore eaque debitis neque veniam, dolor libero, impedit molestiae delectus molestias ducimus itaque exercitationem accusantium sunt vel nam rem.</p> 
            <label htmlFor="giveup">Give Up</label>
            <button ref={buttonRef}>Resume</button>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque consequuntur placeat a pariatur ex odio enim eaque, iusto aspernatur culpa ad eius quaerat deserunt, repellat laudantium ut neque. Ex fugit reiciendis tenetur minima nulla, nesciunt rerum ipsum illum. Dignissimos excepturi fugit doloremque error ratione ducimus itaque ad laboriosam explicabo perferendis, ipsa et vero ipsam maiores rerum recusandae quo sit! Non qui laboriosam maxime debitis voluptate, asperiores culpa, atque quam, eaque voluptas quaerat quis necessitatibus pariatur blanditiis cum? Rerum ad nostrum ducimus, repellendus laborum ab fugiat eum incidunt placeat natus distinctio velit at dolore hic eveniet exercitationem? Dolor tenetur in laboriosam
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quasi illo fuga voluptatum excepturi? Nemo excepturi natus perferendis facilis, nostrum dolore maxime impedit consequuntur placeat ratione quisquam fuga voluptates quos. Reprehenderit accusantium, iure ex harum accusamus eligendi dolor aut minus consectetur ducimus dolores distinctio deserunt optio temporibus quae fugiat labore ad. Quo ea, delectus atque harum asperiores cumque quaerat sequi deleniti, temporibus alias omnis eius cupiditate hic dolore. Possimus, dolorem. Laudantium quos illum vero omnis praesentium fuga ducimus aliquid eaque tempore inventore illo expedita a perspiciatis sunt ipsam, mollitia eius possimus laborum. Quidem quas incidunt placeat, debitis quos vel ipsum corporis odio laborum doloremque neque tenetur, maiores ipsam dolorem! A, quibusdam maxime. Tempora consequuntur atque maiores obcaecati qui quae ad dolorem quo inventore numquam repudiandae aspernatur dolor doloribus sed, ab sint velit! Ab, porro. Nisi doloremque commodi tenetur. Non tenetur, obcaecati impedit earum totam sed iste magni cumque ad assumenda ex quaerat. Explicabo tenetur sequi harum, nulla nihil unde labore mollitia cum, temporibus similique ad rem. Pariatur, quae laboriosam totam officia architecto delectus. Commodi mollitia beatae ex assumenda, maiores quos possimus quod officiis numquam ipsum cum magni vel labore odit natus laborum consequatur nulla autem iure fugit et tenetur tempora voluptatem. Accusantium repellendus, quibusdam, quod veniam cumque harum vel dicta consequatur distinctio itaque voluptate praesentium error tempora sint! Quo numquam explicabo laudantium ipsa cupiditate veritatis at id aut voluptates nulla. Est, placeat repellat rem voluptas quisquam ea, ipsum a eos, suscipit maxime mollitia. Maxime quasi facere voluptatem perspiciatis? Libero perferendis, quod laborum distinctio ipsa magnam, deserunt dicta voluptate similique voluptatibus ut labore optio at quas unde officiis, ullam dolore veniam. Aliquid, natus illum ea quibusdam error repudiandae quam molestias qui cum aliquam asperiores blanditiis. Similique optio quidem culpa explicabo expedita corporis eius beatae, dolor sunt, nulla earum eveniet labore obcaecati voluptatibus sint. Placeat eos reprehenderit excepturi reiciendis laborum esse, aliquam sit commodi nemo qui odio nihil perferendis porro consectetur. Quis rerum nisi aspernatur possimus ad aperiam nobis nam saepe. Eveniet accusamus obcaecati repellat magni earum consequuntur a provident iusto assumenda veniam nam delectus fugit ad similique, libero recusandae alias cum. Provident molestiae tenetur neque ducimus, libero est! Quod exercitationem aperiam, sint asperiores perferendis voluptatibus doloribus sequi laboriosam voluptatem libero modi architecto sed ut odit commodi reprehenderit quas iusto, numquam quasi totam ipsam fuga nobis! Odio suscipit quo accusantium itaque nemo hic dolore quia dicta! Illo error, quo optio vitae quis saepe ullam quod nesciunt officia dolor, asperiores maiores eveniet voluptates architecto, ex corrupti neque! Ipsum qui exercitationem consectetur suscipit sint numquam veritatis modi corporis velit, laboriosam nihil, perferendis vero hic ex dolorem aliquam eaque saepe temporibus! Inventore ullam laudantium ipsam, est ad sint quod a officiis eaque. Eaque, perferendis cum. Tempora, earum dolore. Similique sed tempore, animi aliquid veritatis quidem nesciunt? Et dicta esse iure rerum ipsum nobis. Necessitatibus cupiditate, exercitationem quisquam optio praesentium molestias hic nemo eius deleniti nisi. Ex tempore eaque debitis neque veniam, dolor libero, impedit molestiae delectus molestias ducimus itaque exercitationem accusantium sunt vel nam rem.</p>
        </div>
    );
};

export default MoveableButton;
