"use client"

import { useState } from "react"
import {menuData, menuCategories, formatPrice, MenuItem} from "@/lib/menu-data"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0])

  return (
    <section id="menu" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          {/* Título con la imagen de la dupla */}
          <div className="flex flex-col items-center mb-4">
            <Image
              src="/dupla.webp"
              alt="Cerveza y Pizza"
              width={300}
              height={164}
              className="mb-4"
            />
            <h1 className="text-6xl md:text-7xl lg:text-8xl text-primary mb-2 text-center tracking-wider font-melting">
              Nuestro Menu
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`category-button flex items-center space-x-2 ${
                  activeCategory.id === category.id ? "active" : ""
                }`}
              >
                <div className="flex items-center justify-center w-full">
                  <span>
                    {category.icon} {category.category_name || category.name}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          {activeCategory && (<h3 className={"text-primary text-5xl text-center font-melting my-5 flex items-center justify-center gap-5"}>
              <Image
                src={activeCategory.image}
                alt={activeCategory.name}
                width={86}
                height={86}
                loading={"lazy"}
              />
              {activeCategory.name}
            </h3>)}

          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(menuData[activeCategory.id] as MenuItem[]).map((item, index) => (
                <Card key={index} className="menu-item">
                  <div className="flex justify-between items-start">
                    <h3 className="menu-item-name">{item.nombre}</h3>
                    <span className="menu-item-price">{formatPrice(item.precio)}</span>
                  </div>
                  {item.descripcion && <p className="menu-item-description">{item.descripcion}</p>}
                </Card>
              ))}
            </div>

            {activeCategory.extras && activeCategory.extras.map(extra => (<div key={extra.id}>
              <h3 className={"text-primary text-5xl text-center font-melting my-5 flex items-center justify-center gap-5"}>
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  width={86}
                  height={86}
                  loading={"lazy"}
                />
                {extra.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(menuData[extra.id] as MenuItem[]).map((item: MenuItem, index: number) => (
                  <Card key={index} className="menu-item">
                    <div className="flex justify-between items-start">
                      <h3 className="menu-item-name">{item.nombre}</h3>
                      <span className="menu-item-price">{formatPrice(item.precio)}</span>
                    </div>
                    {item.descripcion && <p className="menu-item-description">{item.descripcion}</p>}
                  </Card>
                ))}
              </div>
            </div>))}
          </>
        </div>
      </div>
    </section>
  )
}

export default MenuSection