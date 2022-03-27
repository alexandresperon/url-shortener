import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Url')
export class UrlEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true })
  shortUrl: string;

  @Column({ nullable: true })
  originalUrl: string;
}
