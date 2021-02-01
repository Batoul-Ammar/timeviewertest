import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  storeItem: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.setStoreItem();
    this.getStoreExtra();
  }

  setStoreItem() {
    this.storeItem = [
      {
        path: "assets/store/store-1.png",
        type: "video",
        price: "299",
        download: "104",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-2.png",
        type: "video",
        price: "149",
        download: "30",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },

      {
        path: "assets/store/store-3.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-1.png",
        type: "video",
        price: "300",
        download: "120",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },

      {
        path: "assets/store/store-2.png",
        type: "video",
        price: "150",
        download: "100",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },

      {
        path: "assets/store/store-3.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-2.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-3.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-1.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
      {
        path: "assets/store/store-3.png",
        type: "video",
        price: "550",
        download: "12",
        title: "تعرف على أسرار صناعة المحتوى التسويقي الفعال",
      },
    ];
  }

  getStoreExtra() {
    this.storeItem.forEach((element) => {
      switch (element.type) {
        case "video":
          element["icon"] = "assets/icon/camera.png";
          break;
        case "audio":
          element["icon"] = "assets/icon/audio.png";
          break;
        case "word":
          element["icon"] = "assets/icon/file.png";
          break;
        case "pdf":
          element["icon"] = "assets/icon/file.png";
          break;

        default:
          break;
      }
      element;
    });
  }
}
