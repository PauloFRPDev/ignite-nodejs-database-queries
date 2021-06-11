import { Column, Entity, JoinColumn, JoinTable, ManyToMany } from "typeorm";
import { Game } from "../../games/entities/Game";
import { Order } from "./Order";

@Entity("order_has_games")
export class OrderHasGames {
  @Column()
  order_id: string;

  @ManyToMany(() => Order)
  @JoinTable()
  @JoinColumn({ name: "order_id" })
  order: Order;

  @Column()
  game_id: string;

  @ManyToMany(() => Game)
  @JoinTable()
  @JoinColumn({ name: "game_id" })
  game: Game;
}
